
import {createComputed, For, Show } from "solid-js"

import "./simpletable.module.css"
import { IndexType, Props, Row, Column } from "./simpletable.types"

function toString(value: any ){
    if (typeof value === "string") {
        return value
    } else {
        return JSON.stringify(value)
    }
}

function tableBodyData<Ind extends IndexType>(row: Row<Ind>, columnID: Ind) {

    if (typeof row === "object") {
      return toString(row[columnID])
    } else {
      return toString(row)
    }
  }

export function SimpleTable<Ind extends IndexType=IndexType>(props: Props<Ind>){

    return <table className={props.className?? "simple_table"}>
        <thead>
            <tr>
                <For each={props.columns!}>
                    {(column)=> {
                        return (
                            <th>{column.label }</th>
                        )
                    }}
                </For>
            </tr>
        </thead>
        <tbody>
            <For each={props.rows!}>
                {(row )=> {
                    return (
                        <tr>
                            <For each={props.columns!}>
                                {(column)=>{
                                    return (
                                        <td>{tableBodyData(row, column.id)}</td>
                                    )
                                }}
                            </For>
                        </tr>
                    )
                }}
            </For>
        </tbody>
    </table>
}