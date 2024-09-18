class StringUtils {

    static truncate (str: string, numChars: number = 50) {

        return str.length > numChars ? `${str.substring(0, numChars)}...` : str;

    }

}

export default StringUtils;