// ─────────────────────────────────────────────────────────────────────────────
// 描述：转义字符串中的HTML特殊字符
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// Converts the characters "&", "<", ">", '"', "'", and "`" in string to their corresponding HTML entities.
// * @param string The string to escape.

// (string?: string): string;

// string?:
// string
// ─────────────────────────────────────────────────────────────────────────────
import { escape } from "lodash-es";



// 原始字符串
const str = "<div>Foo`Bar</div>";
const str1 = "'Foo-Bar'";
const str2 = '"&Foo_Bar"';

// ─────────────────────────────────────────────────────────────────────────────
// 字符串转义
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    escape(str),
    escape(str1),
    escape(str2),
);

// &lt;div&gt;Foo`Bar&lt;/div&gt;
// &#39;Foo-Bar&#39;
// &quot;&amp;Foo_Bar&quot;