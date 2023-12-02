import { useState } from "react";
import { wikiAPI } from "../api/axios";

export default function useWiki() {
    const [summary, setSummary] = useState("");
    const [searchError, setSearchError] = useState("");

    const searchWiki = async (search, lang) => {
        try {
            const url = `/?search=${search}&lang=${lang}`;
            const response = await wikiAPI.get(url);
            console.log(response);
            const { data } = response;
            setSummary(data.summary);
        } catch (err) {
            console.log(err);
            setSearchError(err.message);
        }
    };

    return { summary, searchError, searchWiki };
}