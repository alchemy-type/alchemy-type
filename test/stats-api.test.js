const test = QUnit.test;

QUnit.module('stats api');

const statsApi = {
    key: 'stats',
    get() {
        const statsData = localStorage.getItem(statsApi.key);
        return JSON.parse(statsData);
    },
    save(stats) {
        let statsGet = statsApi.get();
        if(!statsGet) {
            statsApi.init();
        } else {
            statsGet.passages += 1;
            statsGet.avgWPM = ((statsGet.avgWPM * (statsGet.passages - 1)) + stats.wpm) / statsGet.passages;
            statsGet.avgErrors = ((statsGet.avgErrors * (statsGet.passages - 1)) + stats.errorChars.length) / statsGet.passages;
            statsGet = JSON.stringify(statsGet);
            localStorage.setItem(key, statsGet);
        }
    },
    init() {
        const stats = statsApi.get();
        if(!stats) {
            const obj = {
                passages: 0,
                avgWPM: 0,
                avgErrors: 0
            };
            const jsonObj = JSON.stringify(obj);
            localStorage.setItem(key, jsonObj);
        }
    }
};

const key = 'test-stats';
statsApi.key = key;


test('Initialize stats with no previous data, expect base stats back', assert => {
    localStorage.removeItem(key);
    //arrange
    statsApi.init();
    const expected = {
        passages: 0,
        avgWPM: 0,
        avgErrors: 0
    };
    //act
    const result = statsApi.get();
    //assert
    assert.deepEqual(result, expected);
});

test('Initialize stats with previous data, do nothing', assert => {
    localStorage.removeItem(key);
    //arrange
    const data = {
        wpm: 45,
        errorChars: ['l', 'm', 'g']
    };
    statsApi.init();
    statsApi.save(data);
    statsApi.init();
    const expected = {
        passages: 1,
        avgWPM: 45,
        avgErrors: 3
    };
    //act
    const result = statsApi.get();
    //assert
    assert.deepEqual(result, expected);
});

test('Update averages with new data', assert => {
    localStorage.removeItem(key);
    //arrange
    statsApi.init();
    const data1 = {
        wpm: 50,
        errorChars: ['l', 'm', 'g', 'h']
    };
    const data2 = {
        wpm: 100,
        errorChars: ['l', 'm']
    };
    statsApi.save(data1);
    statsApi.save(data2);
    const expected = {
        passages: 2,
        avgWPM: 75,
        avgErrors: 3
    };
    //act
    const result = statsApi.get();
    //assert
    assert.deepEqual(result, expected);
});