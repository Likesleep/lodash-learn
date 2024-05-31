// ─────────────────────────────────────────────────────────────────────────────
// 描述：截断字符串使其不超过指定的长度，并添加省略号表示后续阶段字符串
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param string The string to truncate.
// * @param options The options object or maximum string length.

// (string?, options?): string

// string?:
// string
// options?:
// TruncateOptions
    // /**
    //  */
    // length?: number | undefined;
    // /**
    //  */
    // omission?: string | undefined;
    // /**
    //  */
    // separator?: string | RegExp | undefined;
// ─────────────────────────────────────────────────────────────────────────────
import { truncate } from "lodash-es";



// 原始字符串
const str = "The quick brown fox jumps over the lazy dog";
const str1 = "The quick brown fox, jumps over the lazy dog";

// ─────────────────────────────────────────────────────────────────────────────
// 1.设置length
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    truncate(str, { length: 9 }),
);

// ─────────────────────────────────────────────────────────────────────────────
// 2.设置omission
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    truncate(str, { 
        length: 9,
        omission: "XXXXXX" 
    }),
);

// TheXXXXXX

// ─────────────────────────────────────────────────────────────────────────────
// 3.设置separator
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    truncate(str1, { 
        separator: "  " 
    }),
    truncate(str1, { 
        separator: /,? +/ 
    }),
);
// The quick brown fox, jumps ...
// The quick brown fox, jumps...