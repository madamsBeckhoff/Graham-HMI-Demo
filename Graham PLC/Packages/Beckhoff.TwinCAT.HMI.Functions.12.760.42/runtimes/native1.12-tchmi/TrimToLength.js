var TcHmi;!function(TcHmi){!function(Functions){!function(Beckhoff){Beckhoff.TrimToLength=function(value,trimToLength){if(null===value)return null;const convertedValue=TcHmi.ValueConverter.toString(value);if(null===convertedValue)throw new TypeError("Function TrimToLength: Could not cast parameter to string.");if(null===trimToLength)return convertedValue;let trimmedContent,contentLength=convertedValue.length;return"string"==typeof trimToLength&&(trimToLength=parseInt(trimToLength,10)),isNaN(trimToLength)?convertedValue:trimToLength>0&&contentLength>trimToLength?(trimmedContent=convertedValue.substr(0,trimToLength),trimmedContent):trimToLength<0&&contentLength>-trimToLength?(trimmedContent=convertedValue.substr(contentLength+trimToLength),trimmedContent):convertedValue}}(Functions.Beckhoff||(Functions.Beckhoff={}))}(TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("TrimToLength","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.TrimToLength);