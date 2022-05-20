<template>
    <v-container>
        <p>배경 서식</p>
        <v-row dense>
            <v-col cols="6">배경 색</v-col>
            <v-col cols="6">색상 선택 바???</v-col>
        </v-row>

        <v-row dense>
            <v-col cols="6">배경 무늬</v-col>
            <v-col cols="6">
                <v-radio-group v-model="column" column>
                    <v-radio
                    label="무늬 없음"
                    value="radio-1"
                    ></v-radio>
                    <v-radio
                    label="격자 무늬"
                    value="radio-2"
                    ></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        
        <p></p>
        <v-divider></v-divider>
        <p></p>
        
        <p>객체 서식</p>

        <!--------------------------- 1 ---------------------------->
        <v-sheet
            class="mx-auto"
            elevation="8"
            max-width="800"
        >
            <v-slide-group
                v-model="model"
                class="pa-4"
                active-class="success"
                show-arrows
            >
                <v-slide-item
                    v-for="n in 10"
                    :key="n"
                    v-slot="{ active, toggle }"
                >
                    <v-card
                        :color="active ? undefined : 'grey lighten-1'"
                        class="ma-4"
                        height="100"
                        width="100"
                        @click="toggle"
                    >
                        <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                        >
                            <v-scale-transition>
                                <v-icon
                                    v-if="active"
                                    color="white"
                                    size="40"
                                    v-text="'mdi-check-circle-outline'"
                                ></v-icon>
                            </v-scale-transition>
                        </v-row>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
        <!------------------------- 1 ------------------------------>

        <p></p>
        <v-divider></v-divider>
        <p></p>

        <p>선</p>
        <!------------------------- 2 ------------------------------>
        <v-row>
            <v-col cols="6" md="4">
                <!--선 종류 overflow buttons-->
                <v-overflow-btn
                :items="line_type"
                label="선 종류"
                rounded
                ></v-overflow-btn>
            </v-col>

            <v-col cols="6" md="4">
                <!--선 두께 overflow buttons-->
                <v-overflow-btn
                :items="line_weight"
                label="선 두께"
                rounded
                ></v-overflow-btn>
            </v-col>

            <v-col cols="6" md="4">색상 선택 바???</v-col>
        </v-row>
        <!------------------------ 2 ------------------------------->

        <p></p>
        <v-divider></v-divider>
        <p></p>

        <!------------------------- 3 ------------------------------>
        <v-row>
            <v-col cols="6" md="4">채우기</v-col>

            <v-col cols="6" md="4">
                <!--무늬 종류 overflow buttons-->
                <v-overflow-btn
                :items="pattern_type"
                label="무늬 종류"
                rounded
                ></v-overflow-btn>
            </v-col>

            <v-col cols="6" md="4">색상 선택 바???</v-col>
        </v-row>
        <!-------------------------- 3 ----------------------------->
    </v-container>
</template>

<script>
export default {
    name: 'Edit-design',

    data: () => ({
        column: null,
        
        line_type: [
            { text: '나눔고딕' },
            { text: '맑은고딕' },
            { text: '굴림' },
            { text: 'Arial' },
            { text: 'Calibri' },
            { text: 'Courier' },
        ],

        line_weight: [
            '1pt', '2pt', '3pt', '4pt', '5pt', '6pt', '7pt', '8pt', '9pt', '10pt',
        ],

        pattern_type: [
            { text: '나눔고딕' },
            { text: '맑은고딕' },
            { text: '굴림' },
            { text: 'Arial' },
            { text: 'Calibri' },
            { text: 'Courier' },
        ],
    }),
}
</script>

<style scoped>
div {
    width: 600px;
    max-width: 600px;
}
</style>