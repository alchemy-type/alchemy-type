import statsApi from '../services/stats-api.js';

const averageWPM = document.getElementById('avg-wpm');
const averageNumOfErrors = document.getElementById('avg-error-count');
const completedPassages = document.getElementById('passages');

statsApi.init();
const stats = statsApi.get();

averageWPM.textContent = stats.avgWPM.toFixed(2);
averageNumOfErrors.textContent = stats.avgErrors.toFixed(2);
completedPassages.textContent = stats.passages;
