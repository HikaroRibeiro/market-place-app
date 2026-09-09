import { RegisterView } from "../viewModels/Register/Register.view";
import { useRegisterViewModels } from "../viewModels/Register/useRegister.viewModels";

export default function Register() {

    const props = useRegisterViewModels();

    return (
        <RegisterView {...props} />
    );
}