function encryptDecrypt() {
    var plaintext = document.getElementById("plaintext").value;
    var key = document.getElementById("key").value;
    var blockSize = parseInt(document.getElementById("blockSize").value);
    var resultBeforeBlocks = "";
    var resultAfterBlocks = "";
    var decimalResult = "";
    var sumDecimalResult = 0;
    var hexResult = "";

    if (key.length !== plaintext.length) {
        alert("Error: Key length must be equal to plaintext length.");
        return;
    }

    for (var i = 0; i < plaintext.length; i++) {
        resultBeforeBlocks += (parseInt(plaintext[i]) ^ parseInt(key[i])).toString();
    }

    for (var i = 0; i < resultBeforeBlocks.length; i += blockSize) {
        var block = resultBeforeBlocks.substr(i, blockSize);
        resultAfterBlocks += block + " ";
        var decimalValue = parseInt(block, 2);
        decimalResult += decimalValue + " ";
        sumDecimalResult += decimalValue;
        hexResult += decimalValue.toString(16).toUpperCase() + " ";
    }

    document.getElementById("result-before").value = resultBeforeBlocks;
    document.getElementById("result-after").value = resultAfterBlocks.trim();
    document.getElementById("result-decimal").value = decimalResult.trim();
    document.getElementById("sum-decimal").value = sumDecimalResult;
    document.getElementById("hex-result").value = hexResult.trim();
}
