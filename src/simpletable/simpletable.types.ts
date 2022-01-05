import type {JSX } from "solid-js"

export type IndexType = string | number

export type Row<K extends IndexType = IndexType>= number | string | Record<K, any>

export type Column<K extends IndexType = IndexType> = {
    id: K,
    label?:string
}

export type Props<K extends IndexType>={
    rows: Array<Row<K>>
    columns?: Array<Column<K>>
    style?: JSX.CSSProperties | string
    className? :string
    getRowId?(row: Row<K>): string
}