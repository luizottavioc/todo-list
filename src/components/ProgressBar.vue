<template>
    <div class="aloc-progress-bar">
        <p class="progress-bar__text">{{ progress }}% completed</p>
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
            const list = this.getListTodo();
            const total = list.reduce((acc, item) => {
                if (item.isCompleted) acc++;
                return acc;
            }, 0);

            return (((total / list.length) * 100) || 0).toFixed(2);
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.aloc-progress-bar .progress-bar__text {
    color: #E0E0E0;
    text-shadow: 0px 2px 8px rgba(0,0,0, 0.2);
    font-size: 9px;
    font-weight: 700;
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