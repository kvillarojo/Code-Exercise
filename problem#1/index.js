

    function isPalindrome(str) {
        const re = /[^A-Za-z0-9]/g;
        str = str.toLowerCase().replace(re, '');
        const len = str.length;
        for (let i = 0; i < len/2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
}

     function makePalindrom (str= String) {
        let pal = str
        let index = 0;
        let newStr  = ''

        while(!isPalindrome(pal)){
            newStr += str.charAt(str.length - index)
            pal = newStr.concat(str)
            index++;
        }

        return pal;
    };

    console.log(makePalindrom('google'))
