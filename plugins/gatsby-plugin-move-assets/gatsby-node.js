// Use this in package.json to move the assets into public folder
import fse from "fs-extra";

const copyTheFiles = async (srcPath, destinationPath) => {
    const options = {
        preserveTimestamps: true,
    };

    try {
        await fse.copy(srcPath, destinationPath, options);
        return console.log("Completed copying files");
    } catch (err) {
        return console.error("There was an error copying the files: ", err);
    }
};

export const onPostBuild = async ({}, { srcPath, destinationPath }) => {
    if (!srcPath || !destinationPath) {
        return console.error(
            "The asset move plugin needs at least a srcPath and a destinationPath"
        );
    }
    try {
        await fse.ensureDir(destinationPath);
        await fse.emptyDir(destinationPath);
        await copyTheFiles(srcPath, destinationPath);
    } catch (err) {
        return console.error("There was an error emptying the dir: ", err);
    }
};
