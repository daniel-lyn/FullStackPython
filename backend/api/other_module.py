def fn_from_module():
    print("From other_module")
    print(__name__)

fn_from_module()