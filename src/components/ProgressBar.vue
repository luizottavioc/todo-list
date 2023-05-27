<template>
    <div class="aloc-progress-bar">
        <div class="progress-bar">
            <div class="progress-bar__progress" :style="{ width: progress + '%' }"></div>
        </div>
    </div>
</template>

<script>
import { onRefreshProgress } from '@/eventBus';

export default {
    data() {
        return {
            progress: '0',
        }
    },
    methods: {
        getListTodo() {
            return localStorage.getItem(`dataLinesTodo`) ? JSON.parse(localStorage.getItem(`dataLinesTodo`)) : []
        },
        getNewPercent() {
            let list = this.getListTodo();
            let total = list.reduce((acc, item) => {
                console.log(acc);
                console.log(item);
                if (item.isCompleted) acc++;
                return acc;
            }, 0);

            return ((total / list.length) * 100).toFixed(2);
        },
        updateProgress() {
            this.progress = this.getNewPercent();
        }
    },
    created() {
        onRefreshProgress(() => {
            this.updateProgress();
        });
    },
    mounted() {
        this.updateProgress();
    }

}
</script>

<style scoped>

.aloc-progress-bar {
    position: relative;
    padding: 16px 64px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.aloc-progress-bar .progress-bar {
    position: relative;
    width: 100%;
    height: 8px;
    background-color: #E0E0E0;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0, 0.05);
}

.aloc-progress-bar .progress-bar .progress-bar__progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #3ca140;
    background-image: linear-gradient(45deg, #68bb6b, #3ca140);
    transition: width 0.3s ease-in-out;
}

@media screen and (max-width: 768px) {
    .aloc-progress-bar {
        padding: 8px;
    }
}

</style>