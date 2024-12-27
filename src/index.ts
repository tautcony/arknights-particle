import "core-js/es";
import "regenerator-runtime/runtime";
import {
    fill, random, shuffle, flattenDepth,
} from "lodash";

import SerializedParticleData from "./scenes/particle/SerializedParticleData";
import ParticleModel from "./scenes/particle/ParticleModel";

import AnimationFrameHandler from "./handlers/AnimationFrameHandler";
import ResizeEventHandler from "./handlers/ResizeEventHandler";
import ResponsiveModeHandler from "./handlers/ResponsiveModeHandler";
import InteractiveTouchHandler from "./handlers/InteractiveTouchHandler";
import CursorHandler from "./handlers/CursorHandler";
import MainWebglContainer from "./containers/MainWebglContainer";

import EffectEnum from "./effect/EffectEnum";

import ParticleLoader from "./scenes/particle/ParticleLoader";
import StaffCharLoader from "./scenes/staff/StaffCharLoader";
import FireFlyLoader from "./scenes/firefly/FireFlyLoader";
import PolygonLoader from "./scenes/polygon/PolygonLoader";
import SomkeLoader from "./scenes/smoke/SomkeLoader";
import LqWebglContainer from "./containers/LqWebglContainer";

const animationFrameHandler = new AnimationFrameHandler();
const resizeEventHandler = new ResizeEventHandler();
const responsiveModeHandler = new ResponsiveModeHandler(resizeEventHandler);
const mainWebglContainer = new MainWebglContainer(animationFrameHandler, responsiveModeHandler);
const lqWebglContainer = new LqWebglContainer(mainWebglContainer.camera, animationFrameHandler);
const interactiveTouchHandler = new InteractiveTouchHandler(mainWebglContainer, responsiveModeHandler, resizeEventHandler);
const cursorHandler = new CursorHandler(interactiveTouchHandler, responsiveModeHandler, animationFrameHandler);

/* Notes:
Mi=THREE ue=anime
Yi=_.slice Ne=_.throttle _i=_.fill oa=_.random ka=_.shuffle Ti=_.flattenDepth vi=_.map
*/

function initParticleData(particle: SerializedParticleData, offset: [number, number] = [0.5, 0.5]): ParticleModel {
    const [offsetFactorX, offsetFactorY] = offset;
    const point = particle.points.map((pt) => {
        const [x, y, a] = pt;
        return [
            x - offsetFactorX * particle.size.width,
            offsetFactorY * particle.size.height - y,
            0,
            1,
            1,
            1,
            (1 * (a || 255)) / 255,
        ];
    });

    const ret = {
        ...particle,
        points: [] as number[],
        shuffle() {
            this.points = flattenDepth(shuffle(point), 1);
            return this;
        },
        disappear() {
            for (let i = 0; i < this.count; i++) {
                const x = this.points[i * 7 + 0];
                const y = this.points[i * 7 + 1];
                this.points[i * 7 + 0] = x + 500 * (Math.random() - 0.5);
                this.points[i * 7 + 1] = y + 500 * (Math.random() - 0.5);
                this.points[i * 7 + 2] = 0.5;
                this.points[i * 7 + 3] = 0.5;
                this.points[i * 7 + 4] = 0.5;
                this.points[i * 7 + 5] = 0.5;
                this.points[i * 7 + 6] = -0.5;
            }
            return this;
        },
    };
    ret.shuffle();
    return ret;
}

const particleDataLoader = ({ fileName, key }) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const particleData = require(`../arknights/static/data/${fileName as string}`);
    return {
        key,
        model: initParticleData(particleData),
    };
};

const staffInfo = [
    {
        name: "阿米娅", nameEn: "AMIYA", code: "ROO1", intro: "罗德岛的公开领袖，在内部拥有最高执行权。虽然，从外表上看起来仅仅是个不成熟的少女，实际上，她却是深受大家信任的合格的领袖。现在，阿米娅正带领着罗德岛，为了感染者的未来，为了让这片大地挣脱矿石病的阴霾而不懈努力。", cv: "黑泽朋世", profession: "caster", displayUrl: "arknights/official/pic/20210112/f40da70e0e3d2c89a89aa97c44b6498c.png", camp: "RHODES_ISLAND",
    },
    {
        name: "凯尔希", nameEn: "KAL'TSIT", code: "B003", intro: "罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。", cv: "日笠阳子", profession: "medic", displayUrl: "arknights/official/pic/20210112/f5d1be51761704001cc9e7bd7529c849.png", camp: "RHODES_ISLAND",
    },
    {
        name: "红", nameEn: "PROJEKT RED", code: "SW01", intro: "红，身份不明，履历缺失，由凯尔希医生接收、监护并担保。\n于机动作战，特种作战与隐秘作战中表现出极高天赋，成绩斐然。\n现于凯尔希医生的指导下，作为特种干员为罗德岛提供服务。", cv: "小清水亚美", profession: "special", displayUrl: "arknights/official/pic/20210112/eec21ae5cb8cce8872b07926a46eb2ed.png", camp: "RHODES_ISLAND",
    },
    {
        name: "杜宾", nameEn: "DOBERMANN", code: "R100", intro: "前玻利瓦尔军人，加入罗德岛后担任教官，主要负责基层和新晋干员培训，必要时刻，也会负责对俘虏的审讯。 \n熟悉各种规模的军事行动，自身作为士兵的素养也极高，作为近卫干员，在第一线带领队伍冲锋陷阵。", cv: "种崎敦美", profession: "warrior", displayUrl: "arknights/official/pic/20210112/774aa017f2a8a5654d661cda1051beea.png", camp: "RHODES_ISLAND",
    },
    {
        name: "临光", nameEn: "NEARL", code: "F002", intro: "临光，前卡西米尔耀骑士，感染者援助团体“使徒”的一员。在掩护己方队员、机动作战、歼灭战与开阔地带作战中体现出极高的战斗技巧和个人军事素养。\n现于罗德岛作为重装干员行动，并于现场提供战术指挥支援。", cv: "佐仓绫音", profession: "tank", displayUrl: "arknights/official/pic/20210112/18469152aa1d779c037a259c61e60671.png", camp: "RHODES_ISLAND",
    },
    {
        name: "赫默", nameEn: "SILENCE", code: "RL01", intro: "赫默，莱茵生命有限公司源石有关项目研究员，曾主管数项未知应用研究，同期亦主持数个矿石病临床试验项目。 \n现于罗德岛为多项行动提供战场医疗救护服务。", cv: "鬼头明里", profession: "medic", displayUrl: "arknights/official/pic/20210112/21c96f723a4638c0103798c65b4f5195.png", camp: "RHINE",
    },
    {
        name: "伊芙利特", nameEn: "IFRIT", code: "RL03", intro: "伊芙利特，前莱茵生命医疗对象，重度感染者。拥有极高的源石适应性，伴随有多发性点火现象。进入莱茵生命前的履历缺失。\n现于罗德岛接受治疗，由医疗干员赫默担任监护与担保人。", cv: "花守由美里", profession: "caster", displayUrl: "arknights/official/pic/20210112/5f84a8f3c8deded1bf8dfc28b2bd7146.png", camp: "RHINE",
    },
    {
        name: "白面鸮", nameEn: "PTILOPSIS", code: "RL04", intro: "白面鸮，前莱茵生命公司，数据维护专员。在医疗类源石技艺领域取得不菲成就，于医疗数据维护，常规医疗方案应用，多项目医疗行为等相关领域，拥有丰富经验。 \n现于罗德岛担任医疗干员，亦就职于医疗部门，某临床实验小组。同时，为罗德岛提供若干项医疗项目的相关辅助工作。", cv: "金元寿子", profession: "medic", displayUrl: "arknights/official/pic/20210112/aad79b4cc62d3d7adc2948a0990ebca1.png", camp: "RHINE",
    },
    {
        name: "德克萨斯", nameEn: "TEXAS", code: "PL02", intro: "企鹅物流员工，单兵作战能力出类拔萃。 \n于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛的多项行动提供协助。", cv: "田所梓", profession: "pioneer", displayUrl: "arknights/official/pic/20210112/416445fede74d8d23c6d5f2476d827b2.png", camp: "PENGUIN_LOGISTICS",
    },
    {
        name: "能天使", nameEn: "EXUSIAI", code: "PL03", intro: "能天使，拉特兰公民，适用拉特兰一至十三项公民权益。企鹅物流公司成员。从事秘密联络，武装押运等非公开活动，推测身份：信使。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛多项行动提供协助。", cv: "石见舞菜香", profession: "sniper", displayUrl: "arknights/official/pic/20210112/ab532ac6f4df46164f9b097f2f6b677d.png", camp: "PENGUIN_LOGISTICS",
    },
    {
        name: "可颂", nameEn: "CROISSANT", code: "PL04", intro: "企鹅物流员工，于合约期内任企鹅物流驻罗德岛外派干员。 擅长防守，能同时牵制数个敌人，并拥有怪力，能用巨锤轻松击飞瘦弱的敌人。", cv: "久保百合花", profession: "tank", displayUrl: "arknights/official/pic/20210112/8752c3a0e09ab67178acebe117d536c1.png", camp: "PENGUIN_LOGISTICS",
    },
    {
        name: "陈", nameEn: "CHEN", code: "LM04", intro: "陈，龙门高级警司，龙门近卫局特别督查组组长，毕业于维多利亚皇家近卫学校，成绩优异，表现突出。在龙门近卫局供职期间，力主取缔龙门境内非法活动，对抗暴力犯罪和有组织犯罪，追缉武装逃犯与国际重犯等行动，并取得多项重大成果。\n现作为特别人员协助罗德岛行动，并为现场提供战术指挥支援。", cv: "石上静香", profession: "warrior", displayUrl: "arknights/official/pic/20210112/87f341583ec61b4ce4f5b765464fe89d.png", camp: "LUNGMEN",
    },
    {
        name: "星熊", nameEn: "HOSHIGUMA", code: "LM05", intro: "星熊，龙门近卫局特别任务组精英干员。存在数项指控记录。\n经龙门总督魏彦吾交涉，龙门近卫局依星熊的优异能力与良好表现，破格将其吸纳进近卫局特别督察组。在处理高危险性犯罪事件、要员保护、灾害紧急救援等领域表现出较高专业性。\n现作为重装干员协助罗德岛行动，并为现场提供战术执行与指挥支援。", cv: "安野希世乃", profession: "tank", displayUrl: "arknights/official/pic/20210112/22ab7b3789969d9c381b82d0f24c3c83.png", camp: "LUNGMEN",
    },
];

export function init() {
    animationFrameHandler.init();
    resizeEventHandler.init();
    responsiveModeHandler.init();
    interactiveTouchHandler.init();
    cursorHandler.init();
}

export function background() {
    const polygon = new PolygonLoader(mainWebglContainer, animationFrameHandler, responsiveModeHandler);
    polygon.fire().appear();
    polygon.fadeIn();

    const firefly = new FireFlyLoader(mainWebglContainer, animationFrameHandler);
    firefly.appear();
}

export async function main() {
    const meshParticle = initParticleData({
        size: { width: 820, height: 460 },
        count: 1008,
        points: fill(new Array(1008), 0).map((_val, idx) => [(idx % 42) * 20, 20 * Math.floor(idx / 42), 126, 126, 126, 255]),
    });
    const pmain = ParticleLoader.main(
        mainWebglContainer,
        animationFrameHandler,
        interactiveTouchHandler
    );
    const psub = ParticleLoader.sub(
        mainWebglContainer,
        animationFrameHandler,
        interactiveTouchHandler
    );
    pmain.setMode(EffectEnum.SPREAD).setModel(meshParticle).appear().fire();

    const pData = [
        { key: "lungmen", fileName: "lungmen.data.json" },
        { key: "penguin", fileName: "penguin.data.json" },
        { key: "rhine", fileName: "rhine.data.json" },
        { key: "rhodes", fileName: "rhodes.data.json" },
        { key: "originiums", fileName: "story-1-originiums.data.json" },
        { key: "originium_arts", fileName: "story-2-originium_arts.data.json" },
        { key: "reunion", fileName: "story-3-reunion.data.json" },
        { key: "infected", fileName: "story-4-infected.data.json" },
        { key: "nomadic_city", fileName: "story-5-nomadic_city.data.json" },
        { key: "rhodes_island", fileName: "story-6-rhodes_island.data.json" },
    ].map(particleDataLoader);

    const pTitleData = [
        { key: "infomation", fileName: "title-information.data.json" },
        { key: "media", fileName: "title-media.data.json" },
        { key: "staff", fileName: "title-staff.data.json" },
        { key: "world", fileName: "title-world.data.json" },
    ].map(particleDataLoader);
    const fontSize = parseInt(window.getComputedStyle(document.body).fontSize, 10);
    psub.setMode(EffectEnum.FIXED).setTransform(() => ({
        x: Math.round(5.875 * fontSize - 0.3 * mainWebglContainer.width),
        y: Math.round(0.5 * mainWebglContainer.height - 3.5 * fontSize),
        sc: fontSize / 16,
        pointSize: 1,
    })).setModel(pTitleData[0].model).appear();

    const faction = {
        RHODES_ISLAND: pData.find((t) => t.key === "rhodes"),
        RHINE: pData.find((t) => t.key === "rhine"),
        PENGUIN_LOGISTICS: pData.find((t) => t.key === "penguin"),
        LUNGMEN: pData.find((t) => t.key === "lungmen"),
    };

    const draw = new StaffCharLoader(
        document.querySelector(".staffCharDraw"),
        mainWebglContainer,
        animationFrameHandler,
        resizeEventHandler
    );
    draw.add();
    // await draw.getPreloadTasks(staffInfo.map((t) => t.displayUrl || ""));
    await draw.init(staffInfo[0].displayUrl);
    draw.resetMode(responsiveModeHandler.mode);

    responsiveModeHandler.add(draw.resetMode.bind(draw));
    setInterval(() => {
        const idx = random(0, staffInfo.length - 1);
        pmain.setModel(faction[staffInfo[idx].camp].model);
        psub.setModel(pTitleData[random(0, pTitleData.length - 1)].model);

        draw.transTo(staffInfo[idx].displayUrl, "next").catch((e: unknown) => { console.error("Failed to transTo", e); });
    }, 5000);
    setInterval(() => {
        pmain.setMode([EffectEnum.GATHER, EffectEnum.PERSPECTIVE, EffectEnum.SPREAD][random(0, 2)]);
    }, 10000);

    const smoke = new SomkeLoader(
        lqWebglContainer,
        responsiveModeHandler,
        animationFrameHandler,
        resizeEventHandler
    );
    smoke.appear();
}

init();
background();
main().catch((e: unknown) => { console.error("Failed in main", e); });
