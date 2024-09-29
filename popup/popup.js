document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitchColor = document.getElementById('toggleSwitchColor');
    const toggleSwitchActivation = document.getElementById('toggleSwitchActivation');

    chrome.storage.sync.get(['colorState', 'activationState'], function (result) {
        if (result.colorState !== undefined) {
            toggleSwitchColor.checked = result.colorState;
        }
        if (result.activationState !== undefined) {
            toggleSwitchActivation.checked = result.activationState;
        }
    });

    toggleSwitchColor.addEventListener('change', function () {
        chrome.storage.sync.set({ colorState: toggleSwitchColor.checked }, function () {
            console.log('Switch color state saved:', toggleSwitchColor.checked);
        });
    });

    toggleSwitchActivation.addEventListener('change', function () {
        chrome.storage.sync.set({ activationState: toggleSwitchActivation.checked }, function () {
            console.log('Switch activation state saved:', toggleSwitchActivation.checked);
        });
    });
});
