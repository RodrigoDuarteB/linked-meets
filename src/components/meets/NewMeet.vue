<template>
    <Center class="mt-4">
        <button v-if="!show" class="btn hover:bg-primary-light transition duration-100" @click="show = !show">Nueva Reunión</button>
        <Card v-else> 
            <FormField type="text" name="Título" :data="getTitle"/>
            <FormField type="text" name="Descripción" :data="getDescription"/>
            <FormField type="text" name="Plataforma" :data="getPlatform"/>
            <FormField type="text" name="Enlace" :data="getLink"/>
            <SelectField>
                <SelectFieldOption text="Opción 1" @click="setLink"/>
                <SelectFieldOption text="Opción 2" @click="setLink"/>
                <SelectFieldOption text="Opción 3" @click="setLink"/>
                <SelectFieldOption text="Opción 4" @click="setLink"/>
            </SelectField>
            <div class="flex justify-evenly mt-4">
                <button class="btn hover:bg-primary-light transition duration-100" @click="show = !show">Cancelar</button>
                <button class="btn hover:bg-primary-light transition duration-100" @click="save">Guardar</button>
            </div>
        </Card>
    </Center>
</template>

<script>
    import Center from '../position/Center.vue'
    import FormField from '../style/FormField.vue'
    import Card from '../style/Card.vue'    
    import SelectField from '../style/SelectField.vue'
    import SelectFieldOption from '../style/SelectFieldOption.vue'
    import { store } from '../../../firebase.config'
    import { meetSaved } from '../../utils/notifications'

    export default {
        components: {
            FormField, Center, Card, SelectField, SelectFieldOption
        },
        data (){
            return {
                show: false,
                title: '',
                description: '',
                platform: '',
                link: '',
                id: this.$route.params.id
            }
        },
        methods: {
            getTitle(title){
                this.title = title
            },
            getDescription(description){
                this.description = description
            },
            getPlatform(platform){
                this.platform = platform
            },
            getLink(link){
                this.link = link
            },
            setLink(){
                switch(this.platform){
                    case 'zoom':
                        this.link = 'https://us02web.zoom.us/j/{code}?pwd={pwd}'
                        break
                    case 'google meets':
                        this.link = 'https://meet.google.com/{code}'
                        break
                }
            },
            save(){
                store.collection('meets').add({
                    title: this.title,
                    description: this.description,
                    platform: this.platform,
                    link: this.link,
                    user_id: this.id,
                    created_at: new Date()
                })
                .then(r => {
                    meetSaved()
                    this.show = false
                })
                .catch(e => console.log(e))
            }
        }
    }
</script>

