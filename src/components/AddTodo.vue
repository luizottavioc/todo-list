<template>
    <div class="aloc-add-todo">
        <input type="text" class="add-todo__input" placeholder="To-do..." maxlength="25" v-model="newTextTodo" @keydown.enter="addNewTodoData" />
        <button class="add-todo__button" @click="addNewTodoData">Add new to-do</button>
    </div>
</template>

<script>
import { addTodo } from '@/eventBus';

export default {
    data() {
        return {
            newTextTodo: ''
        }
    },
    methods: {
        addNewTodoData() {
            if(!this.newTextTodo) return false;

            addTodo({
                id: Math.random().toString(36).substring(2, 7),
                text: this.newTextTodo,
                isCompleted: false
            });

            this.newTextTodo = '';
        }
    }
}
</script>

<style scoped>

.aloc-add-todo {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.aloc-add-todo .add-todo__input {
    width: 50%;
    padding: 8px 16px;
    /* border: 2px solid #8a51d7; */
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    outline: none;
    color: #E0E0E0;
    background: transparent;
    font-size: 14px;
    font-weight: bolder;
    text-align: center;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0, 0.05);
}

.aloc-add-todo .add-todo__input::placeholder {
  color: #E0E0E0;
  opacity: 0.7;
}

.aloc-add-todo .add-todo__button {
    padding: 8px 32px;
    border-radius: 8px;
    outline: none;
    color: #E0E0E0;
    background-color: #21D4FD;
    background-image: linear-gradient(10deg, #B721FF, #21D4FD);  
    background-size: 150% 100%;
    background-position-x: left;
    border: none;
    font-size: 12px;
    font-weight: bolder;
    font-style: italic;
    cursor: pointer;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0, 0.05);
    transition: background-color 0.2s ease-in-out,
                background-position-x 0.2s ease-in-out;
}

.aloc-add-todo .add-todo__button:hover {
    background-color: #955be2;
    background-position-x: right;
}

@media screen and (max-width: 768px) {
    .aloc-add-todo .add-todo__input {
        width: 100%;
        font-size: 12px;
    }

    .aloc-add-todo .add-todo__button {
        font-size: 10px;
    }
}

</style>