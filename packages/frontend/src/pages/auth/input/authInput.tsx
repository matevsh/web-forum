interface authInputProps {
    UItext: string
    name: string
    value: string
    setValue(value: string): void
    type?: 'text' | 'password' | 'email'
}

const AuthInput = ({UItext, name, value, setValue, type = 'text'}: authInputProps) => {
    return(
        <>
            <label htmlFor={name}>{UItext}</label>
            <input
                name={name}
                onChange={({target}) => setValue(target.value)}
                value={value}
                type={type}
            />
        </>
    );
};

export default AuthInput;