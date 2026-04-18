let epochTime = document.querySelector('.epoch-time');
function updateTime() {
    epochTime.textContent = `Current Epoch Time: ` + Date.now();
};
setInterval(updateTime, 10);