"server-only"

export const dictionaries={
    fr:()=>import ("@/dictionaries/fr.json").then((module)=>module.default),
    en:()=>import ("@/dictionaries/en.json").then((module)=>module.default)
}

export type DictKey=keyof typeof dictionaries

export const getAllDictionaries=async ()=>{
    const keys = Object.keys(dictionaries) as DictKey[];
    const promises = keys.map((key) => dictionaries[key]());
    const results = await Promise.all(promises);
  
    return keys.reduce<Record<DictKey, any>>((acc, key, index) => {
      acc[key] = results[index];
      return acc;
    }, {} as Record<DictKey, any>);
}