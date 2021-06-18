<template>
  <div class="container">
      <form class="exchange__window">
          <h1>EXCHANGER BUT OVERSIMLIFIED</h1>
          <div class="exchange__innerwrapper">
                <h2>exchange from:</h2>
                <input type="number" placeholder="curr to exchange" class="exchange__from" v-model="opInfo.amount">
                <small v-if="error">err</small>
                <h2>exchange to:</h2>
                <input type="number"  placeholder="exchanged amount" class="exchange__to" v-model="opInfo.exchanged">
                <select name="select" v-model="opInfo.current">
                    <option  v-for="currency in currencies" :key="currency">{{currency}}</option>
                </select>
                <small v-if="error2">err2</small>
                <button class="exchange__button" :disabled="opInfo.isDisabled" @click="onClick">Exchange</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {

    data() {
        return {
            currencies: ['UAH', 'USD', 'EUR', 'BTC', 'ETH'],
            operation: 'toUsd',
            error: false,
            error2: false,
            succes: false,

            opInfo: {
                amount: '',
                exchanged: '',
                current: 'USD',
                isDisabled: true,
                componentToCall: null,
            }
        }
    },
    
    watch: {
        'opInfo.amount': function (oldAmount, newAmount) {
            if (this.opInfo.amount <= 0 || this.opInfo.amount == '') {
                console.log("error boi");
                this.error = true;
                this.opInfo.isDisabled = true;
            } else {
                this.error = false;
                this.opInfo.isDisabled = false;
            }

            console.log(this.opInfo.amount);
            this.opInfo.exchanged = this.opInfo.amount;
            return this.exchange;
        },

        'opInfo.current': function (oldCurrent, newCurrent) {
            console.log(this.opInfo.current);
            if (this.opInfo.current == 'USD') {
                this.operation = 'toUsd';
            }
            if (this.opInfo.current == 'UAH') {
                this.operation = 'toUah';
            }
            if (this.opInfo.current == 'EUR') {
                this.operation = 'toEur';
            }
            if (this.opInfo.current == 'BTC') {
                this.operation = 'toBtc';
            }
            if (this.opInfo.current == 'ETH') {
                this.operation = 'toEth';
            }
            
            if (this.opInfo.exchanged > 0 ) {
                return this.exchange;
            }
        },

        'opInfo.exchanged': function (oldExchanged, newExchanged) {
            if (this.opInfo.exchanged <= 0 || this.opInfo.exchanged == '') {
                console.log("error boi");
                this.error2 = true;
                this.opInfo.isDisabled = true;
            } else {
                this.opInfo.isDisabled = false;
                this.error2 = false;
            }

            this.opInfo.amount = this.opInfo.exchanged;
            return this.exchangeReversed;
        }
    },

    computed: {
        storeCurrencies () {
            return this.$store.getters.getCurrencies;
        },

        exchange: function () {
            this.opInfo.exchanged = (this.opInfo.amount / (this.storeCurrencies['UAH'][this.operation]));
        },
        
        exchangeReversed: function () {
            this.opInfo.amount = (this.opInfo.amount * (this.storeCurrencies['UAH'][this.operation]));
        },
    },

    methods: {
        onClick: function() {
            this.opInfo.componentToCall = 'MessagePopup';
            this.$emit('getInfo', this.opInfo);
        }
    }
}
</script>

<style>

    .container {
        border: 1px solid black;
    }

    .exchange__window {
        display: block;
        width: fit-content;
        padding: 10px;
        margin: 0 auto;
    }

    .exchange__innerwrapper {
        border: 1px solid red;
        width: fit-content;
        margin: 0 auto;
        padding: 20px;
        color: white;
        background-color: black;
    }

    .exchange__innerwrapper button, h2 {
        display: block;
        width: fit-content;
        margin: 0 auto;
        margin-top: 10px;
    }

    .exchange__innerwrapper input, select, button {
        padding: 10px;
    }
    
    .exchange__innerwrapper small {
        display: block;
        width: fit-content;
        margin: 0 auto;
        color: red;
    }
    
</style>