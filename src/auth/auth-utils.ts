export const isTrue = () => true;

export type Session = {
    data: {
      id: string;
      type: string;
    }
}
  
export const isSuperAdmin = ({ session }: { session?: Session }) => {
    return session?.data.type == 'super_admin';
};

export const isSuperAdminOrModerator = ({ session }: { session?: Session }) => {
    return session?.data.type == 'super_admin' || session?.data.type == 'super_moderator';
};