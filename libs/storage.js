export default {
    get(name, defaultValue = null) {
        const value = localStorage.getItem(name) || defaultValue;
        return value || defaultValue;
    },
    set(name, value) {
        localStorage.setItem(name, value);
    },
    remove(name) {
        localStorage.removeItem(name);
    }
}
