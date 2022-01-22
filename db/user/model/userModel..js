export const userModel = {
    formatOne(data) {
        return {
            id: data.id,
            email: data.email,
            hash: data.hash,
            salt: data.salt,
            created_at: Date(data.created_at)
        }
    }
}