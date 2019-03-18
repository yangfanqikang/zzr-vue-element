<template lang="html">
    <div>
        <Primary p-title="Widget Example"></Primary>
        <a-row>
            <a-col :sm="24" :md="12" :xl="6">
                <a-card :bordered="false" style="margin-top: 24px;background-color: #273142;" title="Customers">
                    <sales-data />
                    <div slot="extra">
                        <div>...</div>
                    </div>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import Primary from '../PrimaryTitle'
import SalesData from '../analysis/SalesData'
export default {
  name: 'card',
  components: {
    Primary,
    SalesData
  }
}
</script>

<style lang="scss" module>
.cardBg{
    background-color: #273142;
}
</style>
