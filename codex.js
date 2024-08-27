module.exports = function (eleventyConfig, pluginOptions) {
    /**
     * get a raondom char between two limits
     */
    var codex_get_random_char = function (max, min) {
        // 33 - 126 ascii (decimal)
        var random = Math.floor(Math.random() * (max - min + 1) + min);
        return String.fromCharCode(random);
    };

    /**
     * main sodomizer method
     */
    var sodomizer_change_each_position = function (s) {
        var ret_string = "";
        for (var c = 0; c < s.length; c++) {
            if (s.charCodeAt(c) == 32 && plugin.settings.keep_whitespaces) {
                ret_string += " ";
            } else {
                ret_string += codex_get_random_char(33, 126);
            }
        }
        return ret_string;
    };
    /**
     * change the original revealing characters one by one
     */
    var sodomizer_char_by_char = function (s, poslimit, effect) {
        var ret_string = "";
        var fixed_chars = s.substr(0, poslimit);

        for (var c = poslimit; c < s.length; c++) {
            if (s.charCodeAt(c) == 32 && plugin.settings.keep_whitespaces) {
                ret_string += " ";
            } else {
                ret_string += codex_get_random_char(33, 126);
            }
        }
        if (effect == "typewriter") ret_string = "|";
        return fixed_chars + ret_string;
    };
};
