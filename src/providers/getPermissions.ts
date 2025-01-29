import { supabase } from './supabase';
import { Permission } from '../types';

let cachedPermissions: Permission[] | null = null;

export const getPermissionsFromCache = async (
    role: string
): Promise<Permission[]> => {
    if (cachedPermissions != null) return cachedPermissions;

    const { data: dataPermission, error: errorPermission } = await supabase
        .from('roles')
        .select('id, name, permissions(id, resource, type, action)')
        .match({ name: role })
        .single();

    // Shouldn't happen either as all users are sales but just in case
    if (dataPermission == null || errorPermission) {
        return [];
    }

    cachedPermissions = dataPermission.permissions;
    return dataPermission.permissions;
};
