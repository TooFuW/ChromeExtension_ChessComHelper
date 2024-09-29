document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggleSwitchColor');

    chrome.storage.sync.get(['switchState'], function (result) {
        if (result.switchState !== undefined) {
            toggleSwitch.checked = result.switchState;
        }
    });

    toggleSwitch.addEventListener('change', function () {
        chrome.storage.sync.set({ switchState: toggleSwitch.checked }, function () {
            console.log('Switch state saved:', toggleSwitch.checked);
        });
    });
});
