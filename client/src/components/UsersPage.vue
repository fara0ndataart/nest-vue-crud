<template>
    <v-container>
        <Form
            :validation-schema="schema"
            v-slot="{ handleReset }"
            @submit="createUser"
        >
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
                    <Field name="Date of Birth" v-slot="{ field, errors }">
                        <v-text-field
                            v-model="newUser.birthDate"
                            label="Date of Birth"
                            variant="underlined"
                            v-bind="field"
                            :error-messages="errors"
                            v-maska:[options]
                        ></v-text-field>
                    </Field>
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
                                color="amber-accent-2"
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
                            :items="['US']"
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
                            :items="['Buffalo', 'Rochester', 'Yonkers', 'Syracuse',  'Albany']"
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
                    color="amber-accent-2"
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
                                           :class="{'input-invalid': !user.firstName}"
                                       ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="user.lastName"
                                            variant="underlined"
                                            :class="{'input-invalid': !user.lastName}"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="user.birthDate"
                                            variant="underlined"
                                            :class="{'input-invalid': !user.birthDate}"
                                            v-maska:[options]
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="user.email"
                                            variant="underlined"
                                            :class="{'input-invalid': !user.email}"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="user.gender"
                                            variant="underlined"
                                            :class="{'input-invalid': !user.gender}"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-select
                                            v-model="user.country"
                                            :items="['US']"
                                            variant="underlined"
                                            :class="{'input-invalid': !user.country}"
                                        ></v-select>
                                    </td>
                                    <td>
                                        <v-select
                                            v-model="user.state"
                                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                            variant="underlined"
                                            :class="{'input-invalid': !user.state}"
                                        ></v-select>
                                    </td>
                                    <td>
                                        <v-select
                                            v-model="user.city"
                                            :items="['Buffalo', 'Rochester', 'Yonkers', 'Syracuse',  'Albany']"
                                            variant="underlined"
                                            :class="{'input-invalid': !user.city}"
                                        ></v-select>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="user.address"
                                            variant="underlined"
                                            :class="{'input-invalid': !user.address}"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="user.pincode"
                                            variant="underlined"
                                            :class="{'input-invalid': !user.pincode}"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-btn
                                            icon
                                            :class="['action-button', {'disabled': isEditingDisabled(user)}]"
                                            @click="editUser(user)"
                                        >
                                            <v-icon class="action-icon">
                                                mdi-pencil
                                            </v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-btn
                                            icon
                                            class="action-button"
                                            @click="deleteUser(user._id)"
                                        >
                                            <v-icon class="action-icon">
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
                                        <v-btn
                                            icon
                                            class="action-button"
                                            @click="editUser(user)"
                                        >
                                            <v-icon class="action-icon">
                                                mdi-pencil
                                            </v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-btn
                                            icon
                                            class="action-button"
                                            @click="deleteUser(user._id)"
                                        >
                                            <v-icon class="action-icon">
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

        <v-row>
            <v-col cols="12" class="d-flex justify-end">
                <p class="mt-5 font-weight-light">Items per page</p>
                <v-select
                    v-model="pagination.limit"
                    :items="[3, 5, 10]"
                    variant="underlined"
                    class="custom-select"
                ></v-select>
                <p class="mt-5 mr-10 font-weight-light">
                    {{ displayedPages }}
                </p>
                <div class="mt-5 font-weight-light">
                    <v-icon
                        :class="{'navigation-disabled': !pagination.prevPage }"
                        @click="getPreviousPage"
                    >
                        mdi-chevron-left
                    </v-icon>

                    <v-icon
                        :class="{'navigation-disabled': !pagination.nextPage }"
                        @click="getNextPage"
                    >
                        mdi-chevron-right
                    </v-icon>

                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { Field, Form } from 'vee-validate';
    import { vMaska } from "maska"
    import * as yup from 'yup';
    import {
        computed,
        reactive,
        ref,
        inject,
        watch,
        onMounted
    } from 'vue';
    import UserService from "@/services/UserService";

    onMounted(() => {
        const { page, limit } = pagination;

        getAllUsers(page, limit);
    });

    const genders = [
        { id: 'male', label: 'Male' },
        { id: 'female', label: 'Female' },
    ];

    const swal = inject('$swal');

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
    const options = reactive({
        mask: "####-##-##",
        eager: true
    });
    const pagination = reactive({
        page: 1,
        limit: 3
    })
    const search = ref('');

    watch(
        () => pagination.limit,
        () => getAllUsers(),
        { deep: true }
    );

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

    const displayedPages = computed(() => {
        const { page, totalPages } = pagination;
        const currentPage = page > totalPages ? totalPages : page;

        return `${currentPage} — ${totalPages} of ${totalPages}`
    });

    const createUser = async (value, { resetForm }) => {
        try {
            await UserService.create(newUser);
            await getAllUsers();
            await resetUserForm();
            await resetForm();
            await showSuccessMessage('User has been successfully created');
        } catch (e) {
            showErrorMessage(e.response.data.message.join(', '));
        }
    }

    const deleteUser = async (id) => {
        try {
            await UserService.delete(id);
            await getAllUsers();
            await showSuccessMessage('User has been successfully deleted');
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
                await showSuccessMessage('User has been successfully updated');
            } catch (e) {
                showErrorMessage(e.response.data.message.join(', '))
            }
        }
    }

    const formatDate = (date) => {
        const dateParts = date.substr(0, 10).split("-");

        return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    }

    const getAllUsers = async (page = pagination.page, limit = pagination.limit) => {
        try {
            const { data } = await UserService.getAll(page, limit);
            const { docs: fetchedUsers, ...paginationData } = data;

            const mappedUsers = fetchedUsers.map(user => {
                return {
                    ...user,
                    edit: false
                }
            });

            Object.assign(pagination, paginationData);
            users.splice(0, users.length, ...mappedUsers);
        } catch (e) {
            showErrorMessage(e.response.data.message.join(', '));
        }
    }

    const getPreviousPage = () => {
        const { prevPage, limit } = pagination;

        getAllUsers(prevPage, limit);
    }

    const getNextPage = () => {
        const { nextPage, limit } = pagination;

        getAllUsers(nextPage, limit);
    }

    const isEditingDisabled = (user) => {
        const filteredUser = Object.fromEntries(Object.entries(user).filter(([key]) => key !== "_id" && key !== "__v"))

        return Object.values(filteredUser).map(value => value).some(value => !value)
    }

    const resetUserForm = (handleReset) => {
        Object.keys(newUser).forEach(key => newUser[key] = null);

        if (typeof handleReset === 'function') {
            handleReset();
        }
    };

    const showErrorMessage = (text) => swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text
    });

    const showSuccessMessage = (text) => swal.fire({
        icon: 'success',
        title: 'Success',
        text
    });
</script>

<style lang="scss">
    .action-button {
        .action-icon {
            background-color: #ffd740;
            border-radius: 50%;
            padding: 20px;
        }

        &.disabled {
            pointer-events: none;

            .action-icon {
                background-color: #b9b4b4;
            }
        }
    }

    .text-ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 80px;
    }

    .input-invalid .v-input__control input {
        border-bottom: 3px solid red;
    }

    .custom-select {
        max-width: 75px;
        margin: 0 30px 0 10px;
    }

    .navigation-disabled {
        pointer-events: none;
        cursor: not-allowed;
    }
</style>
