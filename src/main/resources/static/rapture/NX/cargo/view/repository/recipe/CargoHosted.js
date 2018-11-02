/*
 * Copyright 2019, Imperva, Inc. All rights reserved.
 *
 * Imperva, the Imperva logo, SecureSphere, Incapsula, CounterBreach,
 * ThreatRadar, Camouflage, Attack Analytics, Prevoty and design are trademarks
 * of Imperva, Inc. and its subsidiaries. All other brand or product names are
 * trademarks or registered trademarks of their respective holders.
 */

/*
 * Repository settings form for a Cargo repository
 */
Ext.define('NX.cargo.view.repository.recipe.CargoHosted', {
    extend: 'NX.coreui.view.repository.RepositorySettingsForm',
    alias: 'widget.nx-coreui-repository-cargo-hosted',
    requires: [
        'NX.coreui.view.repository.facet.StorageFacet',
        'NX.coreui.view.repository.facet.StorageFacetHosted'
    ],

    /**
     * @override
     */
    initComponent: function () {
        var me = this;

        me.items = [
            { xtype: 'nx-coreui-repository-storage-facet' },
            { xtype: 'nx-coreui-repository-storage-hosted-facet' }
        ];

        me.callParent();
    }
});