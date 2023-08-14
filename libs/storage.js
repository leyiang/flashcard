export default {
    get(name, defaultValue = null) {
        const value = localStorage.getItem(name) || defaultValue;
        return value || defaultValue;
    }
}
