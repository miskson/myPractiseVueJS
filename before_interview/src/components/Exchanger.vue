<template>
  <div class="container">
      <form class="exchange__window">
          <h1>EXCHANGER BUT OVERSIMLIFIED</h1>
          <div class="exchange__innerwrapper">
                <h2>exchange from:</h2>
                <input type="number" placeholder="curr to exchange" class="exchange__from" v-model="amount">
                <small v-if="error">err</small>
                <h2>exchange to:</h2>
                <input type="number"  placeholder="exchanged amount" class="exchange__to" v-model="exchanged">
                <select name="select" v-model="current">
                    <option  v-for="currency in currencies" :key="currency">{{currency}}</option>
                </select>
                <small v-if="error2">err2</small>
                <button class="exchange__button" :disabled="isDisabled">Exchange</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {

    data() {
        return {
            amount: '',
            exchanged: '',
            currencies: ['UAH', 'USD', 'EUR', 'BTC', 'ETH'],
            current: 'USD',
            operation: 'toUsd',
            error: false,
            error2: false,
            isDisabled: true,
            succes: false,
        }
    },
    
    watch: {
        amount: function (oldAmount, newAmount) {
            if (this.amount <= 0 || this.amount == '') {
                console.log("error boi");
                this.error = true;
                this.isDisabled = true;
            } else {
                this.error = false;
                this.isDisabled = false;
            }

            console.log(this.amount);
            this.exchanged = this.amount;
            return this.exchange;
        },

        current: function (oldCurrent, newCurrent) {
            console.log(this.current);
            if (this.current == 'USD') {
                this.operation = 'toUsd';
            }
            if (this.current == 'UAH') {
                this.operation = 'toUah';
            }
            if (this.current == 'EUR') {
                this.operation = 'toEur';
            }
            if (this.current == 'BTC') {
                this.operation = 'toBtc';
            }
            if (this.current == 'ETH') {
                this.operation = 'toEth';
            }
            
            if (this.exchanged > 0 ) {
                return this.exchange;
            }
        },

        exchanged: function (oldExchanged, newExchanged) {
            if (this.exchanged <= 0 || this.exchanged == '') {
                console.log("error boi");
                this.error2 = true;
                this.isDisabled = true;
            } else {
                this.isDisabled = false;
                this.error2 = false;
            }

            this.amount = this.exchanged;
            return this.exchangeReversed;
        }
    },

    computed: {
        storeCurrencies () {
            return this.$store.getters.getCurrencies;
        },

        exchange: function () {
            this.exchanged = (this.amount / (this.storeCurrencies['UAH'][this.operation]));
        },
        
        exchangeReversed: function () {
            this.amount = (this.amount * (this.storeCurrencies['UAH'][this.operation]));
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