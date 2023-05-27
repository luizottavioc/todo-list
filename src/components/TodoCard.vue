<template>
    <div class="card-todo">
        <input :id="'cbx'+id" class="card-todo__cbx-is-completed" type="checkbox" v-model="copyIsCompleted" @change="changeThisTodo" />
        <label :for="'cbx'+id" class="card-todo__lbl-is-completed">
            <fa icon="check" />
        </label>
        <input type="text" class="card-todo__text" maxlength="25" v-model="copyText" @change="changeThisTodo" />
        <label class="card-todo__delete" @click="deleteThisTodo">
            <fa icon="xmark" />
        </label>
    </div>
</template>

<script>
import { changeTodo, removeTodo } from '@/eventBus';
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
            default: ''
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            copyText: this.text,
            copyIsCompleted: this.isCompleted
        }
    },
    methods: {
        changeThisTodo() {
            changeTodo({
                id: this.id,
                text: this.copyText,
                isCompleted: this.copyIsCompleted
            });
            this.$toast.success(`Successful change!`, {
                type: 'success',
                position: 'top-right',
                duration: 500
            });
        },
        deleteThisTodo() {
            removeTodo(this.id);
            this.$toast.success(`Deleted successfully!`, {
                position: 'top-right',
            });
        }
    }
}
</script>

<style scoped>

.card-todo {
    position: relative;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #E0E0E0;
    border-radius: 8px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0, 0.05);
    animation: fadeIn 0.3s ease-in-out 1;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-3px);
    }100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

.card-todo__cbx-is-completed {
    display: none;
}

.card-todo__cbx-is-completed:checked + .card-todo__lbl-is-completed {
    opacity: 1;
}
.card-todo__cbx-is-completed:checked ~ .card-todo__text {
    text-decoration: line-through;
    color: #8a51d7
;
}

.card-todo__lbl-is-completed {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: #FFFFFF;
    background-color: #8a51d7
;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0, 0.05);
    opacity: 0.1;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-todo__text {
    padding: 8px 16px;
    border: none;
    outline: none;
    color: #000000;
    background: transparent;
    font-size: 14px;
    font-weight: bolder;
    text-align: center;
    transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
}

.card-todo__delete {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(8px, -8px);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: #FFFFFF;
    background-color: #FF6B6B;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0, 0.05);
    opacity: 0.3;
    cursor: pointer;
    font-size: 16px;
    transition: opacity 0.1s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-todo__delete:hover {
    opacity: 1;
}

@media screen and (max-width: 768px) {
    .card-todo__text {
        padding: 0px;
        font-size: 12px;
    }

    .card-todo__delete {
        width: 16px;
        height: 16px;
        transform: translate(4px, -4px);
        font-size: 11px;
    }
}

</style>