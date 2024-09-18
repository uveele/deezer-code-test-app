import { ReactNode } from "react";

interface ListProps<T> extends React.InputHTMLAttributes<HTMLUListElement> {
    items: T[];
    renderItem: (item: T) => ReactNode;
    extractKey: (item: T) => string;
}

// const List = <T extends {[P in keyof T]: T[P]}>(props: ListProps<T>) => {
const List = <T,>(props: ListProps<T>) => {

    const { items, renderItem, extractKey, ...rest } = props;

    return (
        <ul 
            { ...rest}
        >
        {
            items.map(item => (
                <li key={ extractKey(item) }>
                    { renderItem(item) }
                </li>
            ))
        }
        </ul>
    )

}

export default List;