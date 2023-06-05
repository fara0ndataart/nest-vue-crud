<template>
    <v-container>
        <Form :validation-schema="schema" v-slot="{ handleReset }" @submit="createUser">
            <v-row>
                <v-col cols="12" md="2">
                    <Field name="FirstName" v-slot="{ field, errors }">
                        <v-text-field
                            v-model="newUser.firstName"
                            label="FirstName"
                            variant="underlined"
                            v-bind="field"
                            :error-messages="errors"
                        ></v-text-field>
                    </Field>
                </v-col>
                <v-col cols="12" md="2">
                    <Field name="LastName" v-slot="{ field, errors }">
                        <v-text-field
                            v-model="newUser.lastName"
                            label="LastName"
                            variant="underlined"
                            v-bind="field"
                            :error-messages="errors"
                        ></v-text-field>
                    </Field>
                </v-col>
                <v-col cols="12" md="2">
<!--                    <Field name="Date of Birth" v-slot="{ field, errors }">-->
                        <v-text-field
                            v-model="newUser.birthDate"
                            label="Date of Birth"
                            variant="underlined"

                        ></v-text-field>
<!--                    v-bind="field"-->
<!--                    :error-messages="errors"-->
<!--                    </Field>-->
                </v-col>
                <v-col cols="12" md="3">
                    <Field name="Email ID" v-slot="{ field, errors }">
                        <v-text-field
                            v-model="newUser.email"
                            label="Email ID"
                            variant="underlined"
                            v-bind="field"
                            :error-messages="errors"
                        ></v-text-field>
                    </Field>
                </v-col>
                <v-col cols="12" md="3" class="mt-3 d-flex">
                    <p class="mt-2 font-weight-light">Gender</p>

                    <Field name="Gender" v-slot="{ field, errors }">
                        <v-radio-group
                            inline
                            v-model="newUser.gender"
                            v-bind="field"
                            :error-messages="errors"
                        >
                            <v-radio
                                v-for="gender in genders"
                                :key="gender.id"
                                :label="gender.label"
                                :value="gender.id"
                                color="yellow darken-2"
                            ></v-radio>
                        </v-radio-group>
                    </Field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="2">
                    <Field name="Country" v-slot="{ field, errors }">
                        <v-select
                            v-model="newUser.country"
                            label="Country"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                            variant="underlined"
                            v-bind="field"
                            :error-messages="errors"
                        ></v-select>
                    </Field>
                </v-col>
                <v-col cols="12" md="2">
                    <Field name="State" v-slot="{ field, errors }">
                        <v-select
                            v-model="newUser.state"
                            label="State"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                            variant="underlined"
                            v-bind="field"
                            :error-messages="errors"
                        ></v-select>
                    </Field>
                </v-col>
                <v-col cols="12" md="2">
                    <Field name="City" v-slot="{ field, errors }">
                        <v-select
                            v-model="newUser.city"
                            label="City"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                            variant="underlined"
                            v-bind="field"
                            :error-messages="errors"
                        ></v-select>
                    </Field>
                </v-col>
                <v-col cols="12" md="3">
                    <Field name="Address" v-slot="{ field, errors }">
                        <v-text-field
                            v-model="newUser.address"
                            label="Address"
                            variant="underlined"
                            v-bind="field"
                            :error-messages="errors"
                        ></v-text-field>
                    </Field>
                </v-col>
                <v-col cols="12" md="3">
                    <Field name="Pincode" v-slot="{ field, errors }">
                        <v-text-field
                            v-model="newUser.pincode"
                            label="Pincode"
                            variant="underlined"
                            v-bind="field"
                            :error-messages="errors"
                        ></v-text-field>
                    </Field>
                </v-col>
            </v-row>

            <v-row class="mt-3 mb-5">
                <v-btn
                    class="ml-3"
                    type="submit"
                >
                    Submit
                </v-btn>

                <v-btn
                    color="yellow darken-2"
                    class="ml-3"
                    @click="resetUserForm(handleReset)"
                >
                    Reset
                </v-btn>
            </v-row>
        </Form>

        <v-row>
            <v-col cols="3" md="3">
                <v-text-field
                    v-model="search"
                    label="Search"
                    variant="underlined"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row class="ml-0">
            <v-card elevation="12">
                <v-card-text>
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-purple">ID</th>
                                <th class="text-purple">First Name</th>
                                <th class="text-purple">Last Name</th>
                                <th class="text-purple">Date of Birth</th>
                                <th class="text-purple">Email Id</th>
                                <th class="text-purple">Gender</th>
                                <th class="text-purple">Country</th>
                                <th class="text-purple">State</th>
                                <th class="text-purple">City</th>
                                <th class="text-purple">Address</th>
                                <th class="text-purple">Pincode</th>
                                <th class="text-purple">Edit</th>
                                <th class="text-purple">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, key) in filteredUsers" :key="user.id" class="text-left">
                                <template  v-if="user.edit">
                                    <td>{{ ++key }}</td>
                                    <td>
                                        <v-text-field
                                            v-model="user.firstName"
                                            variant="underlined"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="user.lastName"
                                            variant="underlined"
                                        ></v-text-field>
                                    </td>
                                    <td>{{ formatDate(user.birthDate) }}</td>
                                    <td>
                                        <v-text-field
                                            v-model="user.email"
                                            variant="underlined"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="user.gender"
                                            variant="underlined"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-select
                                            v-model="user.country"
                                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                            variant="underlined"
                                        ></v-select>
                                    </td>
                                    <td>
                                        <v-select
                                            v-model="user.state"
                                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                            variant="underlined"
                                        ></v-select>
                                    </td>
                                    <td>
                                        <v-select
                                            v-model="user.city"
                                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                            variant="underlined"
                                        ></v-select>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="user.address"
                                            variant="underlined"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="user.pincode"
                                            variant="underlined"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-btn icon @click="editUser(user)">
                                            <v-icon class="action-buttons">
                                                mdi-pencil
                                            </v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-btn icon @click="deleteUser(user._id)">
                                            <v-icon class="action-buttons">
                                                mdi-delete
                                            </v-icon>
                                        </v-btn>
                                    </td>
                                </template>
                                <template v-else>
                                    <td>{{ ++key }}</td>
                                    <td>{{ user.firstName }}</td>
                                    <td>{{ user.lastName }}</td>
                                    <td>{{ formatDate(user.birthDate) }}</td>
                                    <td>
                                        <p class="text-ellipsis" :title="user.email">
                                            {{ user.email }}
                                        </p>
                                    </td>
                                    <td>{{ user.gender }}</td>
                                    <td>{{ user.country }}</td>
                                    <td>{{ user.state }}</td>
                                    <td>{{ user.city }}</td>
                                    <td>{{ user.address }}</td>
                                    <td>{{ user.pincode }}</td>
                                    <td>
                                        <v-btn icon @click="editUser(user)">
                                            <v-icon class="action-buttons">
                                                mdi-pencil
                                            </v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-btn icon @click="deleteUser(user._id)">
                                            <v-icon class="action-buttons">
                                                mdi-delete
                                            </v-icon>
                                        </v-btn>
                                    </td>
                                </template>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script setup>
    import { Field, Form } from 'vee-validate';
    import * as yup from 'yup';
    import {
        computed,
        reactive,
        ref,
        inject,
        onMounted
    } from 'vue';
    import UserService from "@/services/UserService";

    onMounted(() => getAllUsers());

    const swal = inject('$swal');

    const genders = [
        { id: 'male', label: 'Male' },
        { id: 'female', label: 'Female' },
    ];

    const schema = yup.object({
        'FirstName': yup.string().required(),
        'LastName': yup.string().required(),
        'Date of Birth': yup.string().required(),
        'Email ID': yup.string().required().email(),
        'Gender': yup.string().required(),
        'Country': yup.string().required(),
        'State': yup.string().required(),
        'City': yup.string().required(),
        'Address': yup.string().required(),
        'Pincode': yup.string().required(),
    });

    const newUser = reactive({
        firstName: null,
        lastName: null,
        birthDate: null,
        email: null,
        gender: null,
        country: null,
        state: null,
        city: null,
        address: null,
        pincode: null
    });
    const users = reactive([]);
    const search = ref('');

    const filteredUsers = computed(() => {
        const searchTerm = search.value.toLowerCase();

        return users.filter(user => {
            return Object.values(user).some(value => {
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(searchTerm);
                }
                return false;
            });
        });
    });

    const createUser = async () => {
        try {
            await UserService.create(newUser);
            await getAllUsers();
            await resetUserForm();
            await showSuccessMessage('User has been successfully added')
        } catch (e) {
            showErrorMessage(e.response.data.message.join(', '));
        }
    }

    const deleteUser = async (id) => {
        try {
            await UserService.delete(id);
            await getAllUsers();
        } catch (e) {
            showErrorMessage(e.response.data.message.join(', '))
        }
    }

    const editUser = async (user) => {
        user.edit = !user.edit;

        if (!user.edit) {
            try {
                await UserService.update(user._id, user);
                await getAllUsers();
            } catch (e) {
                showErrorMessage(e.response.data.message.join(', '))
            }
        }
    }

    const formatDate = (date) => {
        const dateParts = date.substr(0, 10).split("-");

        return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    }

    const getAllUsers = async () => {
        try {
            const { data: fetchedUsers } = await UserService.getAll();
            const mappedUsers = fetchedUsers.map(user => {
                return {
                    ...user,
                    edit: false
                }
            });
            users.splice(0, users.length, ...mappedUsers);
        } catch (e) {
            showErrorMessage(e.response.data.message.join(', '));
        }
    }

    const resetUserForm = (handleReset) => {
        Object.keys(newUser).forEach(key => newUser[key] = null);
        handleReset();
    };

    const showSuccessMessage = (text) => swal.fire({
        icon: 'success',
        title: 'Wow',
        text
    });

    const showErrorMessage = (text) => swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text
    });
</script>

<style scoped lang="scss">
    .action-buttons {
        background-color: #ffd740;
        border-radius: 50%;
        padding: 20px;
    }

    .text-ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 80px;
    }
</style>
