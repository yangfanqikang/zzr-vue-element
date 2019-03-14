<template lang="html">
    <div>
        <table>
            <thead>
                <tr>
                    <th>type</th>
                    <th>Font / Weight</th>
                    <th>font size</th>
                    <th>Line-height</th>
                    <th>normal / hover</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Headline 1</td>
                    <td>Source Sans Pro Semibold</td>
                    <td>32px</td>
                    <td>44px</td>
                    <td>
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td>Headline 2</td>
                    <td>Source Sans Pro Semibold</td>
                    <td>32px</td>
                    <td>44px</td>
                    <td>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td>Headline 3</td>
                    <td>Source Sans Pro Semibold</td>
                    <td>32px</td>
                    <td>44px</td>
                    <td>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td>Paragraph Style - Tray.io doesn't currently offer two-way syncing features like version merging or version conflict resolution...</td>
                    <td>Source Sans Pro Semibold</td>
                    <td>32px</td>
                    <td>44px</td>
                    <td>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td>Additional paragraph (Footer)</td>
                    <td>Source Sans Pro Semibold</td>
                    <td>32px</td>
                    <td>44px</td>
                    <td>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td>Link style</td>
                    <td>Source Sans Pro Semibold</td>
                    <td>32px</td>
                    <td>44px</td>
                    <td>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
export default {
  name: 'Table'
}
</script>

<style lang="scss" module>
table{
    width: 100%;
    td{
        padding:0 30px;
    }
    th{
        font-size: 12px;
        color: #5B6779;
        line-height:46px;
        font-weight: 600;
        padding:0 30px;
    }
    tbody{
        color: #fff;
        tr{
            height: 70px;
            line-height: 70px;
            padding: 0 30px;
            >td:first-child{
                font-size: 32px;
                max-width: 300px;
            }
            >td:nth-child(2){
                font-size: 18px;
            }
            >td:nth-child(n+3){
                font-size: 16px;
            }
            >td:nth-child(5){
                display: flex;
            }
            >td:nth-child(5)>div{
                width: 40px;
                height: 40px;
                background-color: #9BA3A9;
                margin-right: 20px;
                border-radius: 6px;
            }
        }
        tr:nth-child(2n){
            background:rgba(39,49,66,1);
            border:1px solid #313D4F;
            background-color: rgba(39,49,66,0.4);
            border-radius: 20px;
        }
        tr:nth-child(2){
            td:first-child{
                font-size: 22px;
            }
        }
        tr:nth-child(3){
            td:first-child{
                font-size: 20px;
            }
        }
        tr:nth-child(5){
            td:first-child{
                font-size: 16px;
            }
        }
        tr:nth-child(6){
            td:first-child{
                font-size: 16px;
                color: #6DCFF6;
            }
        }
        tr:nth-child(4){
            height: 105px;
            line-height: 105px;
            >td{
                font-size: 16px;
                line-height:24px;
            }
        }
    }
}
</style>
