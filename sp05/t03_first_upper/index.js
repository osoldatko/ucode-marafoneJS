function firstUpper(z) {
    if (!z) {
        return "";
    }
    z = z.trim().toLowerCase();
    z = z.charAt(0).toUpperCase() + z.slice(1, z.length);
    return z;
}

module.exports.firstUpper = firstUpper;
