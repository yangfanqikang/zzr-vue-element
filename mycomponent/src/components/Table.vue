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
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td>Headline 2</td>
                    <td>Source Sans Pro Semibold</td>
                    <td>22px</td>
                    <td>32px</td>
                    <td>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td>Headline 3</td>
                    <td>Source Sans Pro Semibold</td>
                    <td>20px</td>
                    <td>28px</td>
                    <td>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td>Paragraph Style - Tray.io doesn't currently offer two-way syncing features like version merging or version conflict resolution...</td>
                    <td>Source Sans Pro Semibold</td>
                    <td>16px</td>
                    <td>24px</td>
                    <td>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td>Additional paragraph (Footer)</td>
                    <td>Source Sans Pro Semibold</td>
                    <td>14px</td>
                    <td>22px</td>
                    <td>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td>Link style</td>
                    <td>Source Sans Pro Semibold</td>
                    <td>16px</td>
                    <td>24px</td>
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
    thead{
        tr{
            display: flex;
            justify-content: space-between;
            align-content: center;
            th{
                font-size: 12px;
                color: #5B6779;
                line-height:46px;
                font-weight: 600;
                padding:0 15px;
            }
            th:first-child{
                width: 350px;
            }
            th:nth-child(2){
                width: 250px;
            }
        }
    }
    tbody{
        color: #fff;
        width: 100%;
        tr{
            display: flex;
            width: 100%;
            justify-content: space-between;
            td{
                padding: 0 15px;
                height: 70px;
                line-height: 70px;
                margin: 0;
            }
            >td:first-child{
                width: 350px;
            }
            >td:nth-child(2){
                width: 250px;
            }
            >td:nth-child(5){
                display: flex;
                align-items: center;
            }
            >td:nth-child(5)>div{
                width: 40px;
                height: 40px;
                margin-left: 20px;
                background-color: #9BA3A9;
                border-radius: 4px;
            }
        }
        tr:nth-child(2n){
            background:rgba(39,49,66,1);
            border:1px solid #313D4F;
            background-color: rgba(39,49,66,0.4);
            border-radius: 6px;
        }
        tr:nth-child(1){
            >td:first-child{
                font-size: 32px;
            }
            >td:last-child{
                >div:last-child{
                    opacity: 0;
                }
            }
        }
        tr:nth-child(2){
            >td:first-child{
                font-size: 22px;
            }
            >td:last-child{
                >div:first-child{
                    background-color: #fff;
                }
            }
        }
        tr:nth-child(3){
            >td:first-child{
                font-size: 20px;
            }
        }
        tr:nth-child(4){
            height: 105px;
            display: flex;
            align-items: center;
            >td:first-child{
                font-size: 16px;
                line-height: 24px;
            }
            >td:last-child{
                >div:first-child{
                    background-color: #fff;
                }
                >div:last-child{
                    opacity: 0;
                }
            }
        }
        tr:nth-child(5){
            >td:first-child{
                font-size: 14px;
            }
            >td:last-child{
                >div:first-child{
                    background-color: #fff;
                }
                >div:last-child{
                    opacity: 0;
                }
            }
        }
        tr:nth-child(6){
            >td:first-child{
                font-size: 16px;
                color: #6DCFF6;
            }
            >td:last-child{
               div{
                   background-color: #6DCFF6;
               }
            }
        }
    }
}
</style>
