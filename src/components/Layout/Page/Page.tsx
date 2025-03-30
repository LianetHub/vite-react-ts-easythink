import { FC, PropsWithChildren } from 'react';
import css from './Page.module.scss';


export const Page: FC<PropsWithChildren> = ({ children }) => {

    return (
        <main className={css.page}>
            {children}
        </main>
    )
}