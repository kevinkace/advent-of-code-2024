import { cp, readFile, rename, writeFile } from "node:fs/promises";
import { readdirSync }                     from "node:fs";
import path                                from "node:path";

import { glob } from "glob";

let day = process.argv[2];

if (!day) {
    throw new Error("missing arg");
}

day = day.padStart(2, "0");

try {
    readdirSync(`./days/${day}`);

    throw new Error("dir already exists");
} catch (error) {
    if (!error.toString().includes("no such file or directory")) {
        throw error;
    }
}

await cp("./scaffold-day/template", `./days/${day}`, { recursive : true });

// await rename(`./days/${day}/day.js`, `./days/${day}/${day}.js`);

const files = await glob(`./days/${day}/**/*.*`);

for (let index = 0; index < files.length; index++) {
    const filePath = files[index];

    const file = await readFile(filePath, "utf-8");

    await writeFile(filePath, file.replaceAll("{day}", day));

    const parsed = path.parse(filePath);

    if (parsed.name.includes("day")) {
        await rename(filePath, path.join(parsed.dir, `${parsed.name.replace("day", day)}${parsed.ext}`));
    }
}

console.log("DONE!");
