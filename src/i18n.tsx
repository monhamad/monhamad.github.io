import { createContext, useContext } from 'react';
import { ui, type Lang } from './content';

type Ctx = { lang: Lang; t: typeof ui.fr };
export const LangContext = createContext<Ctx>({ lang: 'fr', t: ui.fr });
export const useLang = () => useContext(LangContext);
