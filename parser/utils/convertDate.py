from datetime import datetime, timedelta

def get_relative_date(date_str):
    if "days ago" in date_str:
        days_ago = int(date_str.split(" ")[0])
        result_date = datetime.now() - timedelta(days=days_ago)
        return result_date.strftime("%b %d, %Y")
    elif "minutes" in date_str or "hours"  in date_str or "hour"  in date_str:
        return datetime.now().strftime("%b %d, %Y")
    else:
        return date_str