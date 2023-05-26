<template>
    <div>
        <div class="container-table">
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Cargo</th>
                        <th>Solicitante</th>
                        <th>Fecha Creacion</th>
                        <th>Numeros Vacantes</th>
                        <th>Proyecto</th>
                        <th>Pais</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Codigo</td>
                        <td>Cargo</td>
                        <td>Solicitante</td>
                        <td>Fecha Creacion</td>
                        <td>Numeros Vacantes</td>
                        <td>Proyecto</td>
                        <td>Pais</td>
                        <td>
                            <div class="row">
                                <RouterLink :to="'/ListarUsuario/'" class="hover-icon col-12 btn">
                                    <img class="icon" src="../../../public/images/lupa.png">
                                </RouterLink>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>