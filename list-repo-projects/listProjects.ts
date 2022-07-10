import { strategies } from "./listProjectFiles";

type Project = {
    paths: {
        file: string;
        root: string;
    },
    tags: ("npm" | "react" | "typescript" | "solution" | "code-workspace" | "git")[]
};

export const listProjects = async (path: string): Promise<Project[]> => {
    return [];
}

const listProjectFiles = async (path: string): Promise < string[] > => {
    return [];
}