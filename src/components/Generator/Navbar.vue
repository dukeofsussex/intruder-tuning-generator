<template>
    <v-navigation-drawer v-model="openMobile"
                         :permanent="$vuetify.breakpoint.mdAndUp"
                         :fixed="$vuetify.breakpoint.smAndDown">
        <v-list-item class="grey darken-4 px-2">
            <v-list-item-avatar class="mr-2">
                <img src="img/icons/logo-white.svg"
                     alt="Icon">
            </v-list-item-avatar>
            <v-list-item-title class="subtitle-1 py-5">
                Intruder Tuning Generator
            </v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list dense
                expand
                class="pt-0"
                two-line>
            <template v-for="item in items">
                <v-list-item v-if="!item.children"
                             :key="item.id"
                             ripple
                             :class="isActive(item.id)"
                             @click="selectNav(item.id)">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-group v-if="item.children"
                              :key="item.id"
                              no-action
                              value="true">
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                    <v-list-item v-for="child in item.children"
                                 :key="child.id"
                                 ripple
                                 :class="isActive(child.id)"
                                 @click="selectNav(child.id)">
                        <v-list-item-content>
                            <v-list-item-title>{{ child.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ child.description }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
    import {
        Component, Prop, Vue, PropSync,
    } from 'vue-property-decorator';
    import {
        VDivider,
        VList,
        VListGroup,
        VListItem,
        VListItemAvatar,
        VListItemContent,
        VListItemSubtitle,
        VListItemTitle,
        VNavigationDrawer,
    } from 'vuetify/lib';
    import { TuningNavList } from '../../tunings/types';

    @Component({
        components: {
            VDivider,
            VList,
            VListGroup,
            VListItem,
            VListItemAvatar,
            VListItemContent,
            VListItemSubtitle,
            VListItemTitle,
            VNavigationDrawer,
        },
    })
    export default class Navbar extends Vue {
        @Prop({ required: true })
        readonly items!: TuningNavList;

        @PropSync('activeNav', { required: true })
        activeNavId!: string;

        @PropSync('openNav', { required: true })
        openMobile!: boolean;

        isActive(id: string): string {
            return id === this.activeNavId ? 'v-list-item--active' : '';
        }

        selectNav(id: string) {
            this.openMobile = false;
            this.activeNavId = id;
        }
    }
</script>
<style scoped lang="scss">
    .v-application .primary--text {
        color: inherit !important;
    }
</style>
