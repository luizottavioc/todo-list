<template>
  <div class="aloc-cards-todo">
    <h1 v-if="dataLinesTodo.length < 1" class="has-no-results">There are no to-do's yet</h1>
    <TodoCard v-else v-for="card in dataLinesTodo" 
        :key="card.id" 
        :id="card.id" 
        :text="card.text" 
        :isCompleted="card.isCompleted" />
  </div>
</template>

<script>
import TodoCard from './TodoCard.vue';
import { onAddTodo, onChangeTodo, onRemoveTodo } from '@/eventBus';

export default {
    data() {
        return {
            dataLinesTodo: localStorage.getItem(`dataLinesTodo`) ? JSON.parse(localStorage.getItem(`dataLinesTodo`)) : []
        }
    },
    components: {
        TodoCard
    },
    created() {
        onAddTodo((data) => {
            this.dataLinesTodo.push(data);
            localStorage.setItem(`dataLinesTodo`, JSON.stringify(this.dataLinesTodo));
        });
        onChangeTodo((data) => {
            const index = this.dataLinesTodo.findIndex((item) => item.id === data.id);
            this.dataLinesTodo[index] = {
                id: data.id || this.dataLinesTodo[index].id,
                text: data.text || this.dataLinesTodo[index].text,
                isCompleted: typeof data.isCompleted !== 'undefined' ? data.isCompleted : this.dataLinesTodo[index].isCompleted || false,
            }

            localStorage.setItem(`dataLinesTodo`, JSON.stringify(this.dataLinesTodo));
        });
        onRemoveTodo((id) => {
            const index = this.dataLinesTodo.findIndex((item) => item.id === id);
            this.dataLinesTodo.splice(index, 1);
            localStorage.setItem(`dataLinesTodo`, JSON.stringify(this.dataLinesTodo));
        });
    },

}
</script>

<style scoped>

.aloc-cards-todo {
  width: 100%;
  padding: 32px 8px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

.has-no-results {
    padding: 8px 16px;
    width: 70%;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    /* border: 1px solid #fff; */
    background: #ffffff28;
    border-radius: 8px;
    opacity: 0.7;
    animation: fadeInHasNoRes 0.3s ease-in-out 1;
}

@keyframes fadeInHasNoRes {
    0% {
        opacity: 0;
        transform: translateY(-3px);
    }100% {
        opacity: 0.7;
        transform: translateY(0px);
    }
}

@media screen and (max-width: 768px) {
    .aloc-cards-todo {
        padding: 16px 8px 8px;
        gap: 8px;
    }

    .has-no-results {
        width: 100%;
    }
}

</style>