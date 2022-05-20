<template>
    <v-container>
        <p>글꼴</p>
        <v-row>
            <v-col
            cols="10"
            md="8"
            lg="8"
            class="py-2"
            >
                <!--글꼴 overflow buttons-->
                <v-overflow-btn 
                dense
                class="my-2"
                :items="font"
                label="글꼴"
                item-value="text"
                rounded
                @change = "change_font(item)"
                ></v-overflow-btn>
            </v-col>

            <v-col
            cols="6"
            md="4"
            lg="4"
            class="py-2"
            >
                <!--글자크기 overflow buttons-->
                <v-overflow-btn
                dense
                class="my-2"
                :items="font_size"
                label="크기"
                rounded
                ></v-overflow-btn>
            </v-col>
        </v-row>

        <v-row dense>
            <v-col cols="6">
                <!--글꼴 스타일 button groups-->
                <v-btn-toggle
                v-model="toggle_multiple"
                multiple
                >
                <v-btn>
                    <v-icon>mdi-format-bold</v-icon>
                </v-btn>
                <v-btn>
                    <v-icon>mdi-format-italic</v-icon>
                </v-btn>
                <v-btn>
                    <v-icon>mdi-format-underline</v-icon>
                </v-btn>
                </v-btn-toggle>
            </v-col>
            <v-col cols="6"><p>Vertical</p></v-col>
        </v-row>
        
        <v-row dense>
            <v-col cols="6">
                <!--정렬 button groups-->
                <v-btn-toggle
                v-model="toggle_exclusive"
                mandatory
                >
                <v-btn>
                    <v-icon>mdi-format-align-left</v-icon>
                </v-btn>
                <v-btn>
                    <v-icon>mdi-format-align-center</v-icon>
                </v-btn>
                <v-btn>
                    <v-icon>mdi-format-align-right</v-icon>
                </v-btn>
                </v-btn-toggle>
            </v-col>
            
            <v-col cols="6">
                <!--Vertical button groups-->
                <v-btn-toggle
                v-model="toggle_exclusive"
                mandatory
                >
                <v-btn>
                    <v-icon>mdi-format-vertical-align-bottom</v-icon>
                </v-btn>
                <v-btn>
                    <v-icon>mdi-format-vertical-align-center</v-icon>
                </v-btn>
                <v-btn>
                    <v-icon>mdi-format-vertical-align-top</v-icon>
                </v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row>

        <p></p>
        <v-divider></v-divider>
        <p></p>

        <v-row dense> <!-- dense 추가여부 선택-->
            <v-col cols="6">글꼴 색</v-col>
            <v-col cols="6">색상 선택 바???</v-col>
        </v-row>

        <v-row dense>
            <v-col cols="6">글배경 색</v-col>
            <v-col cols="6">색상 선택 바???</v-col>
        </v-row>

        <v-row dense>
            <v-col cols="6">테두리 색</v-col>
            <v-col cols="6">색상 선택 바???</v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Edit-text',
    
    data: () => ({
        font: [
            { text: '나눔고딕', callback: ()=> this.change_font('나눔고딕') },
            { text: '맑은고딕' },
            { text: '굴림' },
            { text: 'Arial' },
            { text: 'Calibri' },
            { text: 'Courier' },
        ],
        
        font_size: [
            '8pt', '9pt', '10pt', '11pt', '12pt', '13pt', '14pt', '15pt',
        ]
    }),

    methods: {
        change_font(font){
            alert(font)
        },
        change_fontsize(){
            alert("test~")
        },

    }
}
</script>

<style scoped>
div {
    max-width: 400px;
}
</style>