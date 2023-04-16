class MathUtils {
    static toZero(num) {
        return num < 1 / Math.pow(10, 3) ? 0 : num;
    }
}
export default MathUtils;
