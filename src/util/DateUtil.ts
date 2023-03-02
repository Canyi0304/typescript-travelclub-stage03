class DateUtil {

    static today(): string {

        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${year}-${this.formatNumber(month)}-${this.formatNumber(day)}`;

    }

    private static formatNumber(n: number) {

        return n < 10 ? `0${n}` : n;
        //메서드는 주어진 숫자가 10 미만인 경우, 앞에 0을 붙여 두 자리수로 만들어 반환
    }

}

export default DateUtil;